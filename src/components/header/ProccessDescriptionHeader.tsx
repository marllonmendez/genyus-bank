import './header.scss';

interface PropsHeader {
  title?: string;
  subtitle?: string;
  description?: string;
  component?: JSX.Element;
};

export const ProcessDescriptionHeader = ({title, subtitle, description, component}: PropsHeader) => {
  return (
    <div>
      {component}
      {subtitle ? <h3 className='header'>{subtitle}</h3> : ''}
    </div>
  );
};