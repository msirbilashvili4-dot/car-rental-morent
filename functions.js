export function renderProducts(data, wrapper) {
    wrapper.innerHTML = ""
    data.forEach((car) => {
        const article = document.createElement("article")
        article.classList.add("card")
        const articleHeader = document.createElement("div")
        articleHeader.classList.add("header")
        const headerDiv = document.createElement("div")
        const h3 = document.createElement("h3")
        h3.textContent = car.name
        const carType = document.createElement("p")
        carType.textContent = car.type
        headerDiv.append(h3, carType)
        const favoriteIcon = document.createElement("img")
        favoriteIcon.setAttribute("src", "assets/images/icons/heart.png")
        favoriteIcon.setAttribute("alt", "heart icon")
        articleHeader.append(headerDiv, favoriteIcon)

        const articleImage = document.createElement("div")
        articleImage.classList.add("image")
        const mainImage = document.createElement("img")
        mainImage.setAttribute("src", car.image)
        mainImage.setAttribute("alt", `${car.name} image`)
        articleImage.append(mainImage)

        const spesificationsWrapper = document.createElement("div")
        spesificationsWrapper.classList.add("spesifications")

        const capacityWrapper = document.createElement("div")
        const capacityIcon = document.createElement("img")
        capacityIcon.setAttribute("src", "assets/images/icons/gas-station.png")
        capacityIcon.setAttribute("alt", "gas station icon")
        const capacity = document.createElement("span")
        capacity.textContent = car.specifications.fuelCapacity + " " + "L"
        capacityWrapper.append(capacityIcon, capacity)

        const transmissionWrapper = document.createElement("div")
        const transmissionIcon = document.createElement("img")
        transmissionIcon.setAttribute("src", "assets/images/icons/transmission.png")
        transmissionIcon.setAttribute("alt", "transmission icon")
        const transmission = document.createElement("span")
        transmission.textContent = car.specifications.transmission
        transmissionWrapper.append(transmissionIcon, transmission)

        const seatsWrapper = document.createElement("div")
        const seatIcon = document.createElement("img")
        seatIcon.setAttribute("src", "assets/images/icons/capacity.png")
        seatIcon.setAttribute("alt", "capacity icon")
        const seat = document.createElement("span")
        seat.textContent = car.specifications.seats + " " + "people"
        seatsWrapper.append(seatIcon, seat)

        spesificationsWrapper.append(capacityWrapper, transmissionWrapper, seatsWrapper)

        const articleFooter = document.createElement("div")
        articleFooter.classList.add("footer")
        const priceWrapper = document.createElement("div")
        priceWrapper.classList.add("price-wrapper")
        const priceValue = document.createElement("span")
        priceValue.textContent = "$" + car.price
        const day = document.createElement("span")
        day.textContent = "day"

        priceWrapper.append(priceValue, day)

        const rentNowWrapper = document.createElement("div")
        rentNowWrapper.classList.add("rent-now")
        const link = document.createElement("a")
        link.textContent = "rent now"

        rentNowWrapper.append(link)
        articleFooter.append(priceWrapper, rentNowWrapper)

        article.append(articleHeader, articleImage, spesificationsWrapper, articleFooter)

        wrapper.append(article)

        console.log("test")



    })





}
