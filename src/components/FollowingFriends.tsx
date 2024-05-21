import styled from "styled-components";

const followingFriends = ["kimchi", "kamja", "kokuma", "kimbob", "kimotti?"];
const Wrapper = styled.div`
  background-color: #ff7f50;
  padding: 10px;
  border-radius: 5px;
  width: 50%;
  border: 1px solid white;
  margin: auto;
  margin-bottom: 200px;
`;
const Title = styled.h3`
  margin: 0 0 10px 0;
  font-size: 30px;
  font-weight: bold;
  border-bottom: 1px solid white;
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
      <Title>팔로잉 중인 친구</Title>
      <List>
        {followingFriends.map((friend, index) => (
          <ListItem key={index}>{friend}</ListItem>
        ))}
      </List>
    </Wrapper>
  );
};
export default FollowingFriends;
