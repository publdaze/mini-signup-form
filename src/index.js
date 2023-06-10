const idEl = document.getElementById('id')
const idMsgEl = document.getElementById('id-msg')
const pwEl = document.getElementById('pw')
const pwMsgEl = document.getElementById('pw-msg')
const pwCheckEl = document.getElementById('pw-check')
const pwCheckMsgEl = document.getElementById('pw-check-msg')

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

const isValidPw = (value) => {
    const pwReg = /^[a-zA-Z0-9]{8,16}$/

    return pwReg.test(value)
}

const isValidPwCheck = (value) => {
    return value === pwEl.value
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

const getErrorPwMsg = (value) => {
    if (isEmptyString(value)) {
        return '필수 정보입니다.'
    }
    if (!isValidPw(value)) {
        return '8~16자 영문 대 소문자, 숫자를 사용하세요.'
    }

    return null
}

const getErrorPwCheckMsg = (value) => {
    if (isEmptyString(value)) {
        return '필수 정보입니다.'
    }
    if (!isValidPwCheck(value)) {
        return '비밀번호가 일치하지 않습니다.'
    }

    return null
}

const handleIdBlur = (value) => {
    const errorMsg = getErrorIdMsg(value)

    idMsgEl.innerText = errorMsg
}

const handlePwBlur = (value) => {
    const errorMsg = getErrorPwMsg(value)

    pwMsgEl.innerText = errorMsg
}

const handlePwCheckBlur = (value) => {
    const errorMsg = getErrorPwCheckMsg(value)

    pwCheckMsgEl.innerText = errorMsg
}

setFocus(idEl)

idEl.onblur = () => {
    handleIdBlur(idEl.value)
}

pwEl.onblur = () => {
    handlePwBlur(pwEl.value)
}

pwCheckEl.onblur = () => {
    handlePwCheckBlur(pwCheckEl.value)
}
