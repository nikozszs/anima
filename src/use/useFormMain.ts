import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { computed, watch } from 'vue'
import {useStore} from 'vuex'

export function useFormMain() {
  const store = useStore()
  const {
    handleSubmit,
    isSubmitting,
    submitCount,
    resetForm
  } = useForm({
    initialValues: {
      userName: '',
      userPhone: '',
      agreed: true
    }
  })

  const {
    value: userName,
    errorMessage: userNameError,
    handleBlur: userBlur
  } = useField<string>(
    'userName',
    yup
      .string()
      .trim()
      .required('Введите корректно имя')
      .min(2, 'Имя должно содержать минимум 2 символа')
      .max(20, 'Имя не может быть длиннее 20 символов')
  )

  const {
    value: userPhone,
    errorMessage: userPhoneError,
    handleBlur: userPhoneBlur,
  } = useField<string>(
    'userPhone',
    yup
      .string()
      .trim()
      .required('Введите корректный номер')
      .matches(
        /^(\+7|8)[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
        'Введите корректный номер телефона'
      )
  )

  const {
    value: agreed,
  } = useField<boolean>(
    'agreed',
    yup
      .boolean()
      .oneOf([true], 'Необходимо согласие на обработку данных')
  )

  const isTooManyAttempts = computed(() => submitCount.value >= 3)
  watch(isTooManyAttempts, val => {
    if (val) {
      setTimeout(() => submitCount.value = 0, 1500);
    }
  })

  const onSubmit = handleSubmit(async (val) => {
    try {
      const res = await store.dispatch('form/sendForm', {
        userName: val.userName,
        userPhone: val.userPhone,
        agreed: val.agreed
      })
      resetForm()
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
    isTooManyAttempts
  }
}