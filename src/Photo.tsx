interface Props {
  url: string;
  link: string;
  photographer: string;
  portfolio: string;
  forHire: boolean;
}

const Photo = ({ url, link, photographer, portfolio, forHire }: Props) => {
  return (
    <div className="card m-3 shadow-lg">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={url} alt="FILL THIS IN" className="card-img-top" />
      </a>
      <div className="card-body">
        <a href={portfolio} target="_blank" rel="noopener noreferrer">
          {photographer}
        </a>
        {forHire === true && (
          <span className="for-hire">Currently looking for work</span>
        )}
      </div>
    </div>
  );
};

export default Photo;
