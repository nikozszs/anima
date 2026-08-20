import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { computed, watch } from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export function useFormMain() {
  const store = useStore()
  const router = useRouter()
  const { handleSubmit, isSubmitting, submitCount, resetForm, meta } = useForm()
  const {
    value: userName,
    errorMessage: userNameError,
    handleBlur: userBlur,
    meta: userNameMeta
  } = useField<string>(
    'userName',
    yup
      .string()
      .trim()
      .required('')
      .min(2, 'Имя должно содержать минимум 2 символа')
      .max(20, 'Имя не может быть длиннее 20 символов')
  )

  const {
    value: userPhone,
    errorMessage: userPhoneError,
    handleBlur: userPhoneBlur,
    meta: userPhoneMeta
  } = useField<string>(
    'userPhone',
    yup
      .string()
      .trim()
      .required('')
      .matches(
        /^(\+7|8)[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
        'Введите корректный российский номер телефона'
      )
  )

  const {
    value: agreed,
    meta: agreedMeta
  } = useField<boolean>(
    'agreed',
    yup
      .boolean()
      .required('')
      .oneOf([true], 'Необходимо согласие на обработку данных')
  )

  const isTooManyAttempts = computed(() => submitCount.value >= 3)
  watch(isTooManyAttempts, val => {
    if (val) {
      setTimeout(() => submitCount.value = 0, 1500);
    }
  })

  const isFormValid = computed(() => {
    return meta.value.valid && agreed.value === true
  })

  const isButtonDisabled = computed(() => {
    return !isFormValid.value || isTooManyAttempts.value
  })

  const onSubmit = handleSubmit(async (val) => {
    try {
      const res = await store.dispatch('form/sendForm', {
        userName: val.userName,
        userPhone: val.userPhone,
        agreed: val.agreed
      })
      console.log('✅ Результат отправки:', res)
      resetForm()
      router.push('/')
    } catch (e) {
      console.error('Ошибка при отправке:', e)
      alert('Произошла ошибка. Попробуйте позже.')
    }
  })

  return {
    userName,
    userPhone,
    agreed,
    userNameError,
    userPhoneError,
    userBlur,
    userPhoneBlur,
    onSubmit,
    resetForm,
    isSubmitting,
    isTooManyAttempts,
    isFormValid,
    isButtonDisabled,
    userNameMeta,
    userPhoneMeta,
    agreedMeta,
    meta
  }
}