const idEl = document.getElementById('id')
const idMsgEl = document.getElementById('id-msg')
const pwEl = document.getElementById('pw')
const pwCheckEl = document.getElementById('pw-check')

const setFocus = (el) => {
    el.focus()
}

const isEmptyString = (value) => {
    return value === ''
}

const isValidId = (value) => {
    const idReg = /^[a-z0-9-_]{5,20}$/

    return idReg.test(value)
}

const getErrorIdMsg = (value) => {
    if (isEmptyString(value)) {
        return '필수 정보입니다.'
    }
    if (!isValidId(value)) {
        return '5~20자의 영문 소문자, 숫자와 특수기호(_), (-)만 사용 가능합니다.'
    }

    return null
}

const handleIdBlur = (value) => {
    const errorMsg = getErrorIdMsg(value)

    idMsgEl.innerText = errorMsg
}

setFocus(idEl)

idEl.onblur = () => {
    handleBlur(idEl.value)
}
