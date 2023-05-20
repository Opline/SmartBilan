export {displayCompteRendu, displayConstantes}
const displayConstantes = (obj) => {
  const constantes = [];
  for (const k in obj) {
    const i = obj[k];
    if (i.constantes.length > 0) {
      constantes.push(...i.constantes)
    }
  }
  return formatConstantes(constantes)
}
const findAge = (constantes) => {
  const ageInfp = constantes.find(el => el.type === 15);
  const dateNow = Date.now()
  const dateAcc = (new Date(ageInfp.val)).getTime()
  const delay = Math.abs(dateNow - dateAcc);
  const reoderTime = formatTime(delay);
  return  parseInt(reoderTime.split(' ')[0])

}
const formatConstantes = (constantes) => {
  const constToSend = [];
  // Constante peuvent varié en fonction de l'age mais la flemme de coder
  //const ageP = findAge(constantes)
  constantes.forEach(constante => {
    let parsIntVal = parseInt(constante.val)
    switch (constante.type) {
      case 6: {
        const cr = constante.cr.find(el => el.val[0] <= parsIntVal && parsIntVal <= el.val[1])
        if(cr) {
          const colorC = cr.color ? cr.color : "#808080"
          const mesureC = cr.mesure
          const titleC = constante.text
          const labelC = cr.text
          const obj = {color: colorC, mesure: mesureC, val: parsIntVal, title: titleC, label: labelC}
          constToSend.push(obj)
        }
       break
      }
      case 9 : {
        const parsIntValS = parseInt(constante.val.sys)
        const parsIntValD = parseInt(constante.val.dias)
        //const regex2 = (resp.val.dias[0] <= parsIntValD && parsIntValD <= resp.val.dias[1])
        const cr = constante.cr.find(resp => resp.val.sys[0] <= parsIntValS && parsIntValS <= resp.val.sys[1])
        const colorC = cr.color ? cr.color : "#808080"
        const mesureC = cr.mesure
        const titleC = constante.text
        const labelC = cr.text
        const obj= {color: colorC, mesure: mesureC, val: `${parsIntValS}/${parsIntValD}`, title: titleC, label: labelC}
        constToSend.push(obj)
        break
      }
    }
  })
  return constToSend
}
const displayCompteRendu = (obj) => {
  let infoCompteRendu = []
  const arr = [];
  for (const i in obj) {
    if (i) {
      arr.push(i)
    }
  }
  arr.forEach(key => {
    const info = displayNeuro(obj[key], key)
    infoCompteRendu.push(info)
  })
  return infoCompteRendu
}
const displayNeuro = (infosNeuro, key) => {
  let cr = [];
  const constantes = [];
  const infosSubs = infosNeuro.sub
  for (let idxSub in infosSubs) {
    const infoSub = infosSubs[idxSub]
    if (infoSub.constante) {
      constantes.push(infoSub)
    }
    cr.push(displayNeuroBasic(infoSub))
  }
  return {cr: cr, type: key, label: infosNeuro.text, constantes: constantes}
}

const displayMsgType2 = (info) => {
  let val = info.val
  if (!!val) {
    return `${info.text}: ${val}`
  } else {
    return ""
  }
}
const displayMsgType6 = (info, resp) => {
  let parsIntVal = parseInt(info.val)
  if (resp.val[0] <= parsIntVal && parsIntVal <= resp.val[1]) {
    return resp.text + " à " + parsIntVal + resp.mesure
  } else {
    return ""
  }
}
const formatTime = (timeMS) => {
  const [MS_IN_SEC, SEC_IN_YEAR, SEC_IN_MONTH, SEC_IN_DAY, SEC_IN_HOUR, SEC_IN_MIN] = [1000, 31536000, 2628288, 86400, 3600, 60];
  let seconds = Math.round(Math.abs(timeMS) / MS_IN_SEC);
  const years = Math.floor(seconds / SEC_IN_YEAR);
  seconds = Math.floor(seconds % SEC_IN_YEAR)
  const months = Math.floor(seconds / SEC_IN_MONTH);
  seconds = Math.floor(seconds % SEC_IN_MONTH);
  const days = Math.floor(seconds / SEC_IN_DAY);
  seconds = Math.floor(seconds % SEC_IN_DAY);
  const hours = Math.floor(seconds / SEC_IN_HOUR);
  seconds = Math.floor(seconds % SEC_IN_HOUR);
  const minutes = Math.floor(seconds / SEC_IN_MIN);
  seconds = Math.floor(seconds % SEC_IN_MIN);
  const [aa, mmm, dd, hh, mm, ss] = [years, months, days, hours, minutes, seconds]
    .map(item => item < 10 ? '0' + item : item.toString());
  return aa > 0 ? aa + ' ans' : mmm > 0 ? mmm + ' mois et ' + dd + ' jours ' : dd > 0 ? dd + ' jours et ' + hh + ' heures' : hh + ':' + mm + ':' + ss
}

const displayMSgType15 = (info, resp) => {
  if (info.val) {
    const dateNow = Date.now()
    const dateAcc = (new Date(info.val)).getTime()
    const delay = Math.abs(dateNow - dateAcc);
    const reoderTime = formatTime(delay)
    return `${resp.text} ${reoderTime}`
  } else {
    return ""
  }
}
const displayMsgType9 = (info, resp) => {
  let text = "";
  const parsIntValS = parseInt(info.val.sys)
  const parsIntValD = parseInt(info.val.dias)
  const regex1 = (resp.val.sys[0] <= parsIntValS && parsIntValS <= resp.val.sys[1])
  const regex2 = (resp.val.dias[0] <= parsIntValD && parsIntValD <= resp.val.dias[1])

  if (regex2) {
    text !== "" ? text += " et la " : text += " La tension "
    text += `Diastolique est ${resp.text}  à ${parsIntValD} ${resp.mesure}`
  } else {
    text += ""
  }
  if (regex1) {
    text !== "" ? text += " et la " : text += " La tension "
    text += `Systolique est ${resp.text}  à ${parsIntValS} ${resp.mesure}`
  } else {
    text += ""
  }
  return text
}

const displayNeuroBasic = (info) => {
  let res = ''
  if (info.sub) {
    let res2 = displayNeuro(info, info.text)
    let cr2 = res2.cr;
    res2 = cr2.filter((el) => el !== '');
    if (res2.length > 0) {
      res2 = res2.toString().replaceAll(',', ' ')
      return `${info.text} ` + res2
    } else {
      return ''
    }
  } else {
    const cr = info.cr
    switch (info.type) {
      case 2 :
        res += displayMsgType2(info)
        break
      case 14 :
        res += displayMsgType2(info)
        break
      default:
        for (let idxRep in cr) {
          const resp = cr[idxRep];
          switch (info.type) {
            case 15:
              res += displayMSgType15(info, resp)
              break
            case 11 :
              res += displayMsgType6(info, resp)
              break
            case 9 :
              res += displayMsgType9(info, resp)
              break
            case 6 :
              res += displayMsgType6(info, resp)
              break
            default :
              if (info) (info.val === resp.val) ? res += resp.text : res += ''
          }
        }
    }
    return res
  }

}
