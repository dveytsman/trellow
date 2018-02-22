# Trellow

[Live Site Here](http://www.trellow.review "Trellow Homepage")



### Purpose of Trellow

Trellow is meant to be an implementation of the popular project management site trello using a React Framework with Redux state management front end and using a Rails Framework on the backend.
## Features

* User Authentication using the BCrypt hashing function.
* Boards that have Create, Read, Update, and Delete functionality.
* Lists that have Create, Read and Delete functionality (for update see in progress section).

### Step 1
In order to use this web application you must be logged in. If you just want to try out the functionality a guest login button has been provided for ease of use. See Below.
![Login form](https://github.com/Thrage1/trellow/blob/master/app/assets/images/trellow-login.png "Login Form")

### Step 2
Once logged in you will be confronted with the index of all of your accessible boards. See Below.
![Board Index Page](https://github.com/Thrage1/trellow/blob/master/app/assets/images/board_index.png "Board Index Page")

### Step 3
From this page you can either click on any board to enter the board show or you can click on the Create Board button. The create board button displays a modal for entering the title of your new board. Once entered, the site enters the board which was just created.
![Create Board](https://github.com/Thrage1/trellow/blob/master/app/assets/images/create_board.png "Create Board")

### Step 4
For logout the navbar is available from all pages as a navbar dropdown from the profile link on the upper right. This is denoted by the first 2 letters of the users name. In the case of the guest account it is GU.
![Board Show Page](https://github.com/Thrage1/trellow/blob/master/app/assets/images/board_show.png "Board Show Page")

### Step 5
In order to rename the board all you need to do is to click on the board name or directly underneath where you will find "click to rename board". Once entered the board name will update.
![Rename Board](https://github.com/Thrage1/trellow/blob/master/app/assets/images/rename_board.png "Rename Board")

### Step 6
Creating a list is as simple as clicking on the button labeled Create List. Please be aware deletion of the list is available from the delete button however once deleted the entire list will be deleted as well.
![Create List](https://github.com/Thrage1/trellow/blob/master/app/assets/images/create_list.png "Create List")



## In Progress
* List update functionality
* List Item Create, Read, Update and Delete functionality
* Board Sharing
* Customizable background
