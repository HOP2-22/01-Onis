import './App.css';

const cardData = [
  {
    star: 1,
    comment: "This is a comment",
    avatar:
      "https://img.freepik.com/premium-vector/smiling-girl-avatar_102172-32.jpg?w=826",
    name: "Amy Klassen",
  },
  {
    star: 2,
    comment: "Wow that was really cool",
    avatar:
      "https://img.freepik.com/premium-vector/smiling-girl-avatar_102172-32.jpg?w=826",
    name: "Dani",
  },
  {
    star: 3,
    comment: "This is a comment",
    avatar:
      "https://img.freepik.com/premium-vector/smiling-girl-avatar_102172-32.jpg?w=826",
    name: "Amy Klassen",
  },
  {
    star: 5,
    comment: "This is a comment",
    avatar:
      "https://img.freepik.com/premium-vector/smiling-girl-avatar_102172-32.jpg?w=826",
    name: "Amy Klassen",
  },
];

export const Card = (props) => {
  const { starNumber, comment, avatar, name } = props;
  const star = ["⭐","⭐","⭐","⭐","⭐"];
  star.length = starNumber;

  return (
    <div className='box1'>
      <div className='hehehehaw'>
        {star.map((element, index) => (
          <p key={index}>{element}</p>
        ))}
      </div>
      <p className='comment'>{comment}</p>
      <div className='profile'>
        <img
          src={avatar}
          alt='lorem'
          className='pfp'
        />
        <h4>{name}</h4>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className="card">
        {cardData.map((data, index) => {
          return (
            <div key={index}><Card
              starNumber={data.star}
              comment={data.comment}
              avatar={data.avatar}
              name={data.name}
            /></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
