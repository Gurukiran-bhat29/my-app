const InfoCard = ({ title, summary }: { title: string, summary: string; }) => {

  return (
    <div className='container'>
      <p className='title'>{title}</p>
      <p>{summary}</p>
    </div>
  );
}

export default InfoCard;
