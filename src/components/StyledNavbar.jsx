import React from "react";
import { Button, Dropdown, Menu, Navbar } from "react-daisyui";
import { Link } from "react-router-dom";

export default function StyledNavbar() {
	return (
		<div className="pb-14 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
			<Navbar>
				<Navbar.Start>
					<Dropdown>
						<Button color="ghost" tabIndex={0} className="lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</Button>
						<Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3">
							<Dropdown.Item>
								<Link to="/login">Login</Link>
							</Dropdown.Item>
							{/* <li tabIndex={0}>
								<a className="justify-between">
									Parent
									<svg
										className="fill-current"
										xmlns="http://www.w3.org/2000/svg"
										width={24}
										height={24}
										viewBox="0 0 24 24"
									>
										<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
									</svg>
								</a>
								<ul className="p-2 bg-base-100">
									<li>
										<a>Submenu 1</a>
									</li>
									<li>
										<a>Submenu 2</a>
									</li>
								</ul>
							</li> */}
							<Dropdown.Item>
								<Link to="/history">History</Link>
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<a href="/" className="btn btn-ghost normal-case text-xl">
						daisyUI
					</a>
				</Navbar.Start>
				<Navbar.Center className="hidden lg:flex">
					<Menu horizontal className="p-0">
						<Menu.Item>
							<Link to="/login">Login</Link>
						</Menu.Item>
						{/* <Menu.Item tabIndex={0}>
							<a>
								Parent
								<svg
									className="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width={20}
									height={20}
									viewBox="0 0 24 24"
								>
									<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
								</svg>
							</a>
							<Menu className="p-2 bg-base-100">
								<Menu.Item>
									<a>Submenu 1</a>
								</Menu.Item>
								<Menu.Item>
									<a>Submenu 2</a>
								</Menu.Item>
							</Menu>
						</Menu.Item> */}
						<Menu.Item>
							<Link to="/history">History</Link>
						</Menu.Item>
					</Menu>
				</Navbar.Center>
				<Navbar.End>
					<Button>Get started</Button>
				</Navbar.End>
			</Navbar>
		</div>
	);
}
