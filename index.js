
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.textContent = ('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)


let headerThree = document.createElement('h3')
headerThree.textContent = ('Description:')
dogDetails.append(headerThree)

let paragraph = document.createElement('p')
paragraph.textContent = ('This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.')
dogDetails.append(paragraph)

let headerfour = document.createElement('h3')
headerfour.textContent = ('Feeding Times:')
dogDetails.append(headerfour)

let ul = document.createElement('ul')

let feedingTimes = ['9:30 am', '12:00pm', '5:00pm']
for (let i=0; i < feedingTimes.length; i++){
    let li = document.createElement('li');
    li.textContent = feedingTimes[i]
    ul.append(li)
}

dogDetails.append(ul)
