export default function Layout({
  children,
  admin,
  user,
  tutor,
}: {
  children: React.ReactNode;
  admin: React.ReactNode;
  user: React.ReactNode;
  tutor: React.ReactNode;
}) {
  const role = "USERZ";
  return (
    <div className="container mx-auto px-4">
      {children}
      {admin}
      {user}
      {tutor}
    </div>
  );
}
