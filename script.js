const pertanyaan = document.getElementById('pertanyaan')
const jawaban = document.getElementById('jawaban')

let init = 0

const botSay = (data) => {
    return [
        "Halo, perkenalkan saya bot js. siapa nama kamu? ",
        `ohh nama kamu ${data?.nama}, btw berapa usia kamu? `,
        `owwalah kamu berrusia ${data?.usia}, hmm... makanan favorit kamu apa? `,
        `wahh ${data?.makanan}, aku juga suka makanan itu, kalau minumanya apa`,
        `widih ${data?.minuman}, bagus, btw udah punya pacar belum?`, 
        `ohh ${data?.pacar}, kalau gitu udahan dulu yah` 
    ]
}

pertanyaan.innerHTML = botSay()[0]

function botStart()  {
    init++
    if(init===1) {
        botDelay({nama : jawaban.value})
    } else if (init===2) {
        botDelay({usia : jawaban.value})
    } else if (init===3) {
        botDelay({makanan : jawaban.value})
    } else if (init===4) {
        botDelay({minuman : jawaban.value})
    } else if (init===5) {
        botDelay({pacar : jawaban.value})
    } else if (init===6) {
        finishing()
    } else {
        botEnd()
    }
}

let usersData=[]

function botDelay(jawabanUser) { 
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    }, [500]) 
    usersData.push(jawaban.value)
    jawaban.value = ''
}

function finishing() {
    console.log({usersData : usersData})
    pertanyaan.innerHTML = `makasih ya ${usersData[0]}  udah main kesini,
    kali kali kita makan ${usersData[2]} bareng ya aku yang bayar `
    jawaban.value ='okeyyy maksih juga'
}

function botEnd() {
    alert("ulang")
    window.location.reload()
    jawaban.value=''
}