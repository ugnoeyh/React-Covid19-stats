import styled from "styled-components";
import useStats from "../utils/useStats";

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const StatBlock = styled.div`
  background: #FFA7A7;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`;

const ConfirmBlock = styled.div`
  background: #FFE08C;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`;

const DeathsBlock = styled.div`
  background: #FFA7A7;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`;

const RecoverBlock = styled.div`
  background: #CEF279;
  font-size: 2em;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`;


export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  // console.log(stats, loading, error);
  if (loading) return <h1>Loading ...</h1>;
  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <StatGrid>
          <ConfirmBlock>
            <h3>확진환자:</h3>
            <span>{stats.confirmed ? stats.confirmed.value : "NA"}</span>
          </ConfirmBlock>
          <DeathsBlock>
            <h3>사망자:</h3>
            <span>{stats.deaths ? stats.deaths.value : "NA"}</span>
          </DeathsBlock>
          <RecoverBlock>
            <h3>격리해제:</h3>
            <span>{stats.recovered ? stats.recovered.value : "NA"}</span>
          </RecoverBlock>
        </StatGrid>
      )}
    </>
  );
}
