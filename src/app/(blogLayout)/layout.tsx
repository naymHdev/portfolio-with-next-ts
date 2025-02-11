interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <>
      <div className=" min-h-screen flex">{children}</div>
    </>
  );
};

export default BlogLayout;
