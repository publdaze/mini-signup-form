const idEl = document.getElementById('id')
const idMsgEl = document.getElementById('id-msg')
const pwEl = document.getElementById('pw')
const pwMsgEl = document.getElementById('pw-msg')
const pwCheckEl = document.getElementById('pw-check')
const pwCheckMsgEl = document.getElementById('pw-check-msg')
const formEl = document.getElementById('form')
const dialogEl = document.getElementById('modal')
const confirmIdEl = document.getElementById('confirm-id')
const confirmPwEl = document.getElementById('confirm-pw')
const cancelBtnEl = document.getElementById('cancel-btn')
const approveBtnEl = document.getElementById('approve-btn')
const increaseFontBtnEl = document.getElementById('increase-font-btn')
const decreaseFontBtnEl = document.getElementById('decrease-font-btn')

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

const handleIdBlur = ({ value, classList }) => {
    const errorMsg = getErrorIdMsg(value)

    if (errorMsg) {
        classList.add('border-red-600')
    } else {
        classList.remove('border-red-600')
    }
    idMsgEl.innerText = errorMsg
}

const handlePwBlur = ({ value, classList }) => {
    const errorMsg = getErrorPwMsg(value)

    if (errorMsg) {
        classList.add('border-red-600')
    } else {
        classList.remove('border-red-600')
    }
    pwMsgEl.innerText = errorMsg
}

const handlePwCheckBlur = ({ value, classList }) => {
    const errorMsg = getErrorPwCheckMsg(value)

    if (errorMsg) {
        classList.add('border-red-600')
    } else {
        classList.remove('border-red-600')
    }
    pwCheckMsgEl.innerText = errorMsg
}

setFocus(idEl)

idEl.onblur = () => {
    handleIdBlur(idEl)
}

pwEl.onblur = () => {
    handlePwBlur(pwEl)
}

pwCheckEl.onblur = () => {
    handlePwCheckBlur(pwCheckEl)
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault()

    if (!isValidId(idEl.value)) {
        setFocus(idEl)
        handleIdBlur(idEl)
    } else if (!isValidPw(pwEl.value)) {
        setFocus(pwEl)
        handlePwBlur(pwEl)
    } else if (!isValidPwCheck(pwCheckEl.value)) {
        setFocus(pwCheckEl)
        handlePwCheckBlur(pwCheckEl)
    } else {
        dialogEl.show()
        confirmIdEl.textContent = idEl.value
        confirmPwEl.textContent = pwEl.value
    }
})

cancelBtnEl.onclick = () => {
    dialogEl.close()
}

approveBtnEl.onclick = () => {
    window.alert('가입되었습니다 🥳')
}

increaseFontBtnEl.onclick = () => {
    const fontSize = Number.parseInt(
        window.getComputedStyle(formEl).fontSize,
        10
    )
    document.documentElement.style.fontSize = fontSize + 1 + 'px'
}

decreaseFontBtnEl.onclick = () => {
    const fontSize = Number.parseInt(
        window.getComputedStyle(formEl).fontSize,
        10
    )
    document.documentElement.style.fontSize = fontSize - 1 + 'px'
}
