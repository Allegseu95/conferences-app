export const Title = ({ text = '' }) => {
  return (
    <div className='card bg-transparent text-light border border-danger'>
      <div className='card-body'>Este es el inicio.</div>

      <p>{text}</p>
    </div>
  );
};
