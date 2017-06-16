import createTheme from "spectacle/lib/themes/default";

const initialTheme = createTheme({
	primary: "white",
	secondary: "black",
	tertiary: "#09b5c4",
	quartenary: "rgba(255, 219, 169, 0.43)",
	fifth:"#282c34"
}, {
	primary: { name: "Droid Serif", googleFont: true, styles: [ "400", "700i" ] }
});

export const theme = {
	...initialTheme,
	screen: {
		...initialTheme.screen,
		components: {
			...initialTheme.screen.components,
			code: {
				...initialTheme.screen.components.code,
				color: initialTheme.screen.colors.quartenary
			},
			text: {
				...initialTheme.screen.components.text,
				color: initialTheme.screen.colors.quartenary
			},
			link: {
				...initialTheme.screen.components.link,
				color: initialTheme.screen.colors.tertiary
			},
		},
		progress: {
			...initialTheme.screen.progress,
			pacman: {
				...initialTheme.screen.progress.pacman,
				pacmanBottom: {
					...initialTheme.screen.progress.pacman.pacmanBottom,
					background: initialTheme.screen.colors.tertiary
				},
				pacmanTop: {
					...initialTheme.screen.progress.pacman.pacmanTop,
					background: initialTheme.screen.colors.tertiary
				},
				point: {
					...initialTheme.screen.progress.pacman.point,
					borderColor: initialTheme.screen.colors.tertiary
				}
			},
		}
	}
};
