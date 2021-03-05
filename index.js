function showInfo() {
  let name = document.querySelector("input#name").value
  let email = document.querySelector("input#email").value
  let age = document.querySelector("input#age").value


  /* dropdown */
  let occupation = document.querySelector("select[name='occupation'] option:checked").value

  /* radio */
  let recommendation = document.querySelector("input[name='options']:checked").value

  /* checkbox */
  let content = document.querySelectorAll("input[type='checkbox']:checked")
  let contentList = []
  content.forEach(element => {
    contentList.push(element.value)
  })

  let contentChecked = contentList.join(", ")

  alert("Nome: " + name +
        "\nEmail: " + email +
        "\nIdade: " + age +
        "\nOcupação atual: " + occupation +
        "\nRecomenda a plataforma? " + recommendation +
        "\nConteúdo de interesse: " + contentChecked)
}