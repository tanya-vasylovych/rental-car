interface CarLayoutProps {
  children: React.ReactNode;
}

const CarLayout = ({ children }: CarLayoutProps) => {
  return (
    <section>
      <div>{children}</div>
    </section>
  );
};

export default CarLayout;
