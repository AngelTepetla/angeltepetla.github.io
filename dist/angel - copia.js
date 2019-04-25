(async function getIpAddress () {
const ipAPI = 'https://api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const {value: ipAddress} = await swal({
  title: 'Ingresa tu nombre:',
  input: 'text',
  inputValue: inputValue,
  showCancelButton: true,
  inputValidator: (value) => {
    return !value && '¡Intentalo de nuevo!'
  }
})

if (ipAddress) {
  swal(`Your IP address is ${ipAddress}`)
}






})()