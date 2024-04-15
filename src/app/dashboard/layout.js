export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="flex justify-center items-center">DashboardLayout</div>

      {children}
    </section>
  );
}
