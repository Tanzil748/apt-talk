CREATE DATABASE updated_apttalk; -- I created database

-- User table
CREATE TABLE users(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    userName VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    userPassword VARCHAR(200) NOT NULL,
    profilePic VARCHAR(500) DEFAULT 'https://cdn.iconscout.com/icon/free/png-512/free-profile-9175670-7513097.png?f=webp&w=512',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Post table
CREATE TABLE posts (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    postContent TEXT NOT NULL,
    picture VARCHAR(300),
    postAuthorId BIGINT REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL --foreign key
);

-- Comment Table
CREATE TABLE comments(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    commentContent VARCHAR(300) NOT NULL,
    commentUserId BIGINT REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL, --foreign key
    commentPostId BIGINT REFERENCES posts(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL --foreign key
);

-- Bookmark Table
CREATE TABLE bookmarks(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    bookmark_post_id BIGINT REFERENCES posts(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL, --foreign key
    bookmark_user_id BIGINT REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL --foreign key
);

-- Follow List Table (this will be implemented in a future version)
CREATE TABLE followers(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    followerId BIGINT REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL, --foreign key (users in follow list) => only way to follow is if loggedUser manually press follow
    followedUserId BIGINT REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL--foreign key
);

-- Stories Table [future version]
CREATE TABLE stories(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    storyPic VARCHAR(300) NOT NULL,
    storyUserId BIGINT REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL
);

-- This is for adding new post (when testing)
 INSERT INTO posts (postcontent, picture, postauthorid) VALUES ('loremblah blah', 'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60', 60);