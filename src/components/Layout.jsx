function Layout({ title, children }) {
	return (
		<main>
			<h2>{title}</h2>

			<section>{children}</section>
		</main>
	);
}

export default Layout;
