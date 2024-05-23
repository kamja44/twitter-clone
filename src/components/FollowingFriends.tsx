import styled from "styled-components";

const followingFriends = ["니꼬", "kimchi", "kamja", "kokuma", "kimbob"];
const Wrapper = styled.div`
  background-color: #ff7f50;
  padding: 10px;
  border-radius: 5px;
  width: 60%;
  border: 1px solid white;
  margin: auto;
  margin-bottom: 200px;
`;
const Title = styled.h3`
  margin: 0 0 10px 0;
  font-size: 30px;
  font-weight: bold;
  border-bottom: 1px solid white;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin: 5px 0;
`;

const FollowingFriends = () => {
  return (
    <Wrapper>
      <Title>인플루언서</Title>
      <List>
        {followingFriends.map((friend, index) => (
          <ListItem key={index}>{friend}</ListItem>
        ))}
      </List>
    </Wrapper>
  );
};
export default FollowingFriends;
