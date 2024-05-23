import styled from "styled-components";

const popularSearches = [
  "React tutorials",
  "JavaScript tips",
  "CSS tricks",
  "Frontend frameworks",
  "Web development",
];

const Wrapper = styled.div`
  background-color: #ff7f50;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid white;
  width: 50%;
  margin: auto;
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

const PopularSearches = () => {
  return (
    <Wrapper>
      <Title>인기 검색어</Title>
      <List>
        {popularSearches.map((search, index) => (
          <ListItem key={index}>{search}</ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default PopularSearches;
