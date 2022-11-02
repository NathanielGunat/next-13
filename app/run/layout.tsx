export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>nested layout</div>
      {children}
    </div>
  );
}
