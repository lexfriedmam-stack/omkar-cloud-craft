import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					light: 'hsl(var(--primary-light))',
					glow: 'hsl(var(--primary-glow))',
					dark: 'hsl(var(--primary-dark))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					bright: 'hsl(var(--accent-bright))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fadeInUp': {
					from: {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fadeInDown': {
					from: {
						opacity: '0',
						transform: 'translateY(-30px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fadeInScale': {
					from: {
						opacity: '0',
						transform: 'scale(0.8)'
					},
					to: {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'slideInLeft': {
					from: {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					to: {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slideInRight': {
					from: {
						opacity: '0',
						transform: 'translateX(30px)'
					},
					to: {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'bounceIn': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.3) rotate(-10deg)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.05) rotate(2deg)'
					},
					'70%': {
						transform: 'scale(0.9) rotate(-1deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) rotate(0deg)'
					}
				},
				'gradientShift': {
					'0%, 100%': { 'background-position': '0% 50%' },
					'50%': { 'background-position': '100% 50%' }
				},
				'textShimmer': {
					'0%, 100%': { 'background-position': '0% center' },
					'50%': { 'background-position': '200% center' }
				},
				'pulse': {
					'0%': { 'box-shadow': '0 0 0 0 hsl(var(--primary) / 0.4)' },
					'70%': { 'box-shadow': '0 0 0 20px hsl(var(--primary) / 0)' },
					'100%': { 'box-shadow': '0 0 0 0 hsl(var(--primary) / 0)' }
				},
				'shimmer': {
					'0%': { 'background-position': '-200% 0' },
					'100%': { 'background-position': '200% 0' }
				},
				'morphBorder': {
					'0%, 100%': { 'border-radius': '1rem' },
					'50%': { 'border-radius': '2rem' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fadeInUp 0.8s ease-out',
				'fade-in-down': 'fadeInDown 0.8s ease-out',
				'fade-in-scale': 'fadeInScale 0.6s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'slide-in-left': 'slideInLeft 0.6s ease-out',
				'slide-in-right': 'slideInRight 0.6s ease-out',
				'bounce-in': 'bounceIn 0.8s ease-out',
				'gradient-shift': 'gradientShift 8s ease infinite',
				'text-shimmer': 'textShimmer 3s ease-in-out infinite',
				'pulse-glow': 'pulse 2s ease-in-out infinite alternate',
				'shimmer': 'shimmer 2s infinite',
				'morph-border': 'morphBorder 4s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;