const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value.trim() !== '') { // make the input is not empty
        displayList(input.value); // call  the function that outputs the submitted chapter
        chaptersArray.push(input.value); // add the chapter to the array
        setChapterList(); // update the local storage with the new array
        input.value = ''; // clear the input field
        input.focus(); // set the focus back to the input 
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });

    console.log('I like to copy code instead of typing it out myself and trying to understand it.')
}

function setChapterList() {
    localStorage.setItem('myFavChapters', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavChapters'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // remove the ❌ from the string
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

// button.addEventListener('click', function () {
//     if (input.value.trim() !== '') {
//         const li = document.createElement('li');
//         const deleteButton = document.createElement('button');

//         li.textContent = input.value;
//         deleteButton.textContent = '❌';

//         li.append(deleteButton);
//         list.append(li);

//         deleteButton.addEventListener('click', function () {
//             list.removeChild(li);
//         });

//         input.value = '';
//         input.focus();
//     }
// });
