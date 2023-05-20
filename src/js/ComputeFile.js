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

export {initFile}

const getmedicInfosNames = (medicInfos) => {
  return medicInfos.map(info => info.name)
}
const initFile = () => {
  const infoBilan = bilan;
  const medicInfos = readTextFile(Medics);
  const keyFile = [{id: 'Intro', file: SubIntro}, {id: 'Bn', file: subBn}, {id: 'BNT', file: SubBnt}, {
    id: 'C',
    file: SubC
  }, {
    id: "BR",
    file: subBr
  }, {id: "CA", file: SubCA}, {id: 'DL', file: SubDL}, {id: 'ATC', file: SubATC}, {
    id: "TTT", file: SubTTT
  }]
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
