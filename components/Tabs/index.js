// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const mainTab = document.querySelector('.topics');

function createTab(arr) {
    arr.forEach(data => {
        const tab = document.createElement('div');

        tab.classList.add('tab');
        tab.textContent = data;

        mainTab.appendChild(tab);
    });
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) => {
        console.log("Good Job buddy!", response);
        console.log("Topics", response.data.topics);

        createTab(response.data.topics);
    })

    .catch((error) => {
        console.log("WTF Buddy!: there is no DATA!, Tryg Agian!", error);
    })