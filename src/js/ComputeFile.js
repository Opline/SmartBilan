import SubBnt from '../json/sub/subBnt.json'
import SubC from '../json/sub/subC.json'
import subBn from "@/json/sub/subBn.json";
import subBr from "@/json/sub/subBR.json"
import bilan from "@/json/bilan.json";
import SubCA from "@/json/sub/subCA.json"
import SubDL from "@/json/sub/subDL.json"
import SubIntro from "@/json/sub/subIntro.json"
import SubATC from '@/json/sub/subATC.json'
import SubTTT from "@/json/sub/subTTT.json"
import Medics from '@/assets/txt/CIS_bdpm.txt'
import Motifs from '@/json/motifs.json'
import SubCirc from '@/json/sub/SubCirc.json'
import SubDig from '@/json/sub/SubDegis.json'

export {initFile, getMotifs}

const cisuToInt = (v) => {
  return parseInt((v.code_CISU.split('.').join('')).slice(1))
}

const getMotifs = () => {
  const motifs = JSON.parse(JSON.stringify(Motifs))
  const orderMotifs = motifs.sort((a, b) => {
    return cisuToInt(a) - -cisuToInt(b);

  })
  let ParLab1, ParLab2;
  const res =   orderMotifs.map(motif => {
    const code_CISU = motif.code_CISU.split('.')
    const lengthCode_CISU = code_CISU.length
    if(motif.LibC === "") {
      motif.LibC = motif.Lib1
    }
    if (lengthCode_CISU === 2) {
      if (parseInt(code_CISU[1]) === 0) {
        ParLab1 = motif.Lib1
      } else {
        motif.Lib1 = `${ParLab1} ${motif.Lib1}`
      }
    }
    if (lengthCode_CISU === 3) {
      if (parseInt(code_CISU[2]) === 0) {
        ParLab2 = motif.Lib1
      } else {
        motif.Lib1 = `${ParLab1} ${ParLab2} ${motif.Lib1}`
      }
    }

 return motif
  })
  return res

}
const getmedicInfosNames = (medicInfos) => {
  return medicInfos.map(info => info.name)
}
const initFile = () => {
  const infoBilan = bilan;
  const medicInfos = readTextFile(Medics);
  const keyFile = [{id: 'Intro', file: SubIntro}, {id: "Circ", file: SubCirc }, {id: 'Bn', file: subBn}, {id: 'BNT', file: SubBnt}, {
    id: 'C',
    file: SubC
  }, {
    id: "BR",
    file: subBr
  }, {id: "CA", file: SubCA}, {id: 'DL', file: SubDL}, {id: 'ATC', file: SubATC}, {
    id: "TTT", file: SubTTT,
  }, { id :"Dig", file: SubDig}]
  keyFile.forEach(item => findFile(infoBilan, item.id, item.file))
  return {sub: infoBilan, medics: getmedicInfosNames(medicInfos)}
}
const readTextFile = (file) => {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  let arr;
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status === 0) {
        var allText = rawFile.responseText;
        arr = allText.split('\n')
        arr = arr.map(el => {
          const id = el.substring(0, 8);
          const beforevirg = el.split(',')
          let name = beforevirg[0].replace("\tA", '').substring(9)
          return {id: id, name: name}
        })

      }
    }

  }
  rawFile.send(null);
  return arr
}
const findFile = (bilan, key, data) => {
  const infoB = bilan[(key)]
  if (infoB) {
    infoB.sub = data
  }

}
