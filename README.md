# Apt-Talk

### Note: This is an updated version of apt-talk with a new UI.

AptTalk is a community-oriented application that primarily focuses on real estate. It provides a social media spin to traditional real estate websites, where users can interact and discuss with each other about everything related to real estate. Planning a community event? Need general advice on home decor? Want to see the forum's consensus about certain neighborhoods? AptTalk is an all in one solution!

## Tech Stack

**Client:** `React`, `React Query`, `Tailwind CSS`

**Server:** `Node`, `Express`, `PostgreSQL`

## Demo

Here's a walkthrough of how the app functions:

- Upon entering application, the forum is shown where all user posts/bookmarks/comments can be seen. User then registers & logs in to their respective account. If successful login, user is authorized to: create a post, bookmark a post, and comment!
  ![](https://github.com/Tanzil748/apt-talk/blob/main/gif/loginRegisterView.gif)
  <br/>

- User creates a post and can bookmark their & others posts. User can also comment on posts! Multer & cloudinary is used to store images in the web.
  ![](https://github.com/Tanzil748/apt-talk/blob/main/gif/createPostAndBookmarkView.gif)
  <br/>

- Here's the stored images in cloudinary, in an upload folder!
  ![](https://github.com/Tanzil748/apt-talk/blob/main/gif/cloudImages.png)
  <br/>

- User can only delete their posts. Changes are saved, regardless if user is logged in or out!
  ![](https://github.com/Tanzil748/apt-talk/blob/main/gif/deletePostView.gif)

## Deployment

Clone this repository and install npm packages on both client & server side.

```bash
  npm install
```

Then, to deploy this project run the following on client & server terminal:

```bash
  npm start
```

## Database Schema

#### Users

| Property     | Type         | Description                              |
| ------------ | ------------ | ---------------------------------------- |
| id           | Big Serial   | id for user account (default field)      |
| userName     | Varchar(9)   | username                                 |
| email        | Varchar(50)  | user email                               |
| userPassword | Varchar(200) | user password                            |
| profilePic   | Varchar(500) | profile pic (given default value)        |
| createdAt    | TimeStamp    | time of account creation (default field) |

#### Posts

| Property     | Type         | Description                        |
| ------------ | ------------ | ---------------------------------- |
| id           | Big Serial   | post id (default field)            |
| postContent  | Text         | user post content                  |
| picture      | Varchar(300) | user post image                    |
| postAuthorId | Big Int      | foreign key attached to users "id" |

#### Comments

| Property       | Type         | Description                        |
| -------------- | ------------ | ---------------------------------- |
| id             | Big Serial   | comment id (default field)         |
| commentContent | Varchar(300) | comment text                       |
| commentUserId  | Big Int      | foreign key attached to users "id" |
| commentPostId  | Big Int      | foreign key attached to posts "id" |

#### Bookmarks

| Property         | Type       | Description                        |
| ---------------- | ---------- | ---------------------------------- |
| id               | Big Serial | bookmark id (default field)        |
| bookmark_post_id | Big Int    | foreign key attached to posts "id" |
| bookmark_user_id | Big Int    | foreign key attached to users "id" |

## Future Features

In future versions, I plan on implementing a variety of features:

- Follow/Friend List (unique for each user)
- Add User Stories
- Granting user's the ability to edit their own posts, comments & profile
- User profile will display selected user's posts
- Integrating social logins (google/github)
