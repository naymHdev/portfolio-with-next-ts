interface IRoutTitleProps {
  firstP: string;
  secondP: string;
}

const RouteTitle = ({ firstP, secondP }: IRoutTitleProps) => {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-semibold text-title">
        {firstP} <span className="text-primaryColor">{secondP}</span>
      </h2>
    </div>
  );
};

export default RouteTitle;
