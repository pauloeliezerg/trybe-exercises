import './news.css';

type NewsProps = {
  title: string;
  content: string;
};

function News({ title, content }: NewsProps) {
  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      <p className="text" text>
        {content}
      </p>
    </div>
  );
}

export default News;
