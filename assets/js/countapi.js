// https://api.countapi.xyz/create?namespace=shay-m.github.io&enable_reset=1

function websiteVisits(response) {
  //   document.getElementById('visits').innerText = response.value;
  document.getSelection('#visits').textContent = response.value;
  console.log('>> ' + response.value);
}
