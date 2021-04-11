---
title: Creating a Kanban board using ReactJS
date: 2021-04-11T19:27:10.317Z
description: tl;dr the process that went behind creating a trello like full
  stack application
---
Hello guys,

It seems like I lost my momentum after just the first week of starting my weekly DevDiary. But it was not the case. For the next 2 weeks, I was busy creating this Kanban Board, a full stack application for an assignment for an interview procedure. I took it upon myself to make it interesting and learn a lot on the way.![](https://cdn.buymeacoffee.com/uploads/project_updates/2021/04/30973014948bd5e74bf047bc7d0bdff3.png)

At first the whole idea sounded vague, huge and scary. I mean, a kanban board? First thing I thought of was [trello](https://trello.com/). No way was it possible for me to create something that good, in 10 days too. Never the less, I started.

### Backend - NodeJS

Being a Front-end person, it was a very new thing for me to start developing the backend first. It was only prudent to do so, since I had hardly ever created a full on API from scratch, small services for image/gif processing, yes, a few API endpoints, yes, but a full fledged API, never. So, I designed the DB structure, chalked out the endpoints I would need and created the backend in approximately 5-6 hours.

I used NodeJs, Express, Mongoose for coding the backend and MongoDB as the database. It was surprising how much I learnt in this project. I setup a local mongodb for the first time, connected it and used it and it felt really good doing this part without any help. Here are the resources I used:

* Mongo DB installation and setup:

  Install mongoDB on Mac: <https://zellwk.com/blog/install-mongodb/>

  Setup MongoDB locally: <https://zellwk.com/blog/local-mongodb/>
* Setting up the backend (This generates a boilerplate code for creating API):

  <https://expressjs.com/en/starter/generator.html>

### Frontend - ReactJS

Now frontend has always been a piece of cake for me, right? But this was big. I was on my own, no team members to help out with the small stuff, while I was researching on the more complicated aspects of the project. I tried a few ready-made libraries for the frontend. Here's a couple:

* [React Kanban](< https://www.npmjs.com/package/@lourenci/react-kanban>)
* [React kanban DnD](https://github.com/lucasbesen/react-kanban-dnd)

And I'm sure you all know that neither worked to fulfil my needs. Not saying they were all bad, but they were pretty basic, and they had limitations. For example, I could not add any actions to the card. BIG NO. I wanted something bigger, which meant I had to make something from ground up. So I used [react-beautiful-dnd](https://www.npmjs.com/package/react-beautiful-dnd) and created a drag and drop context for my kanban app. Here is the break down:

1. create a drag-drop context
2. create the droppable pieces, columns in our case
3. create the draggable pieces, the task cards.

Breaking it down to this level, the intimidation started to wear off. I did not use any component libraries, and did the UI all using [emotion](https://www.npmjs.com/package/emotion), another first for me. But it was a lot like [styled components](https://github.com/styled-components), which I have been using for 2 years now, so it did not take much getting used to. Created a basic, very basic drag and drop columns-cards structure to get the foundation ready, then added the more enhanced bits and pieces.

Connecting to the backend was another task, because creating and structuring the global state using basic redux was something I had not done before, so another first. I have used DVA and UMIjs before and those took me 2 months of getting used to. Thus, I was not expecting too much in terms of how optimised the state management was going to be, but I managed it somehow. (thanks to my mentor here for help)

Links to resources:

1. <https://react-redux.js.org/introduction/getting-started>
2. <https://www.freecodecamp.org/news/how-to-use-redux-in-reactjs-with-real-life-examples-687ab4441b85/>
3. <https://react-redux.js.org/tutorials/connect>

Once the listing of task states and tasks was out of my way, I started on the details like adding titles, descriptions and images to the tasks. Then went on to the updating of Task State names, and deleting tasks, and their states. Once all the features had fit in I worked for some time playing around with colours and the look and feel of the whole app. I used [react-icons](https://reacticon.org/) for the cute little icons, [unsplash](https://unsplash.com) for temporary images and coolors.co for deciding the colours of the app. I am still not happy with the colours I ended up with, so I'm open for suggestions, because wasting hours on [coolors.co](https://coolors.co/generate) only made me confused.

All in all, the whole app was ready, as planned in a span of 10 days, working whenever I had the time after my full time job. One night I stayed up until 3 am just finishing the frontend. It was more of 2 to 3 days of work, with an average 4 to 5 hours give and take each day, included late nights, heavy junk intake, naps and a lot of coffee! But in the end it turned out to be fruitful, because the people loved my submission. You can check it out on [my github page](https://github.com/KashafS98/) which also includes full instructions on running the app.

Github links:

<https://github.com/KashafS98/kanban-frontend> (contains instructions)

<https://github.com/KashafS98/kanban-service>

Hope you enjoyed it, and find the resources helpful, the story inspiring and the project fun! You can send in your versions of the kanban to me and/or reach out to me for any queries on my social media!

PS: I got super busy with interviews and assignments and work after this, so the next two weeks went stale. But I will definitely do something this week, so stay tuned!

Until next time,

K