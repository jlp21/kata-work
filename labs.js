//tweet lab

import "./App.css";
import Tweet from "./components/Tweet";

const tweetsArray = [
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "1h ago",
    message:
      "the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "2h ago",
    message:
      "sometimes. the human presses their noggin against mine. to figure out what i’m thinking. so i just think really hard. about how much i love them. and hope they figure it out",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "3h ago",
    message:
      "here is what. i plan to accomplish today: \n\n2. bark loudly. but at nothing \n7. lose my ball under the couch\n7b. politely ask the human. to get my ball\n3. immediately lose it again. under the same couch\n4. big nap. you have worked hard\n2. repeat",
  },
];

function App() {
  return (
    <div className="App">
      {/* <Tweet /> */}
      <Tweet tweet={ tweetsArray[0] }/>
    </div>
  );
}

export default App;

//Tweet component

import ProfileImage from "./ProfileImage";

function Tweet(props) {
  console.log("props",props)
  return (
    <div className="tweet">
    <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{props.tweet.user.name}</span>
            <span className="handle">{props.tweet.user.handle}</span>
          </span>

          <span className="timestamp">{props.tweet.timestamp}</span>
        </div>

        <p className="message">
          {props.tweet.message}
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;


function ProfileImage(props) {
    
  return (
  
  <img src={props.image} className="profile" alt="profile"/>

  );
}

export default ProfileImage;


function User(props) {

  return (

      <span className="user">
          <span className="name"> {props.userData.name} </span>
          <span className="handle"> {props.userData.handle} </span>
      </span>

  );
}

export default User;

function Timestamp(props) {

  return (


      <span className="timestamp">{props.time}</span>

  );
}

export default Timestamp;

function Message(props) {
    
  return (
  
  <p className="message"> {props.message} </p>

  );
}

export default Message;

function Actions() {

  return (

      <div className="actions">
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
      </div>

  );
}

export default Actions;
