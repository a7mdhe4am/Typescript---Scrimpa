

const reviewTotalDisplay = document.querySelector('#reviews')

const reviews = [
    {
        name: 'sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2011'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

function showReviewTotal(value: number) {
    reviewTotalDisplay.innerHTML = value.toString()
}

showReviewTotal(reviews.length)
