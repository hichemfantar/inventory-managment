import React from "react";
import { Badge, Button, Checkbox, Hero, Mask, Table } from "react-daisyui";

export default function StyledTable() {
	return (
		<div>
			<Hero>
				{/* <Hero.Overlay className="bg-opacity-60" /> */}
				<Hero.Content className="text-center">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">Inventory History</h1>
						<p className="py-6">
							This is a complete history of items borrowed from the inventory
						</p>

						{/* <Button color="primary">Get Started</Button> */}
					</div>
				</Hero.Content>
			</Hero>
			<div className="overflow-x-auto w-full mb-14">
				<Table className="rounded-box w-full">
					<Table.Head>
						<Checkbox />
						<span>Name</span>
						<span>Item</span>
						<span>Status</span>
						<span />
					</Table.Head>

					<Table.Body>
						<Table.Row>
							<Checkbox />
							<div className="flex items-center space-x-3 truncate">
								<Mask
									variant="squircle"
									src="http://daisyui.com/tailwind-css-component-profile-2@56w.png"
								/>
								<div>
									<div className="font-bold">Hart Hagerty</div>
									<div className="text-sm opacity-50">United States</div>
								</div>
							</div>
							<div>
								Zemlak, Daniel and Leannon
								<br />
								<Badge color="ghost" size="sm">
									Desktop Support Technician
								</Badge>
							</div>
							<div>Purple</div>
							<Button color="ghost" size="xs">
								details
							</Button>
						</Table.Row>

						<Table.Row>
							<Checkbox />
							<div className="flex items-center space-x-3 truncate">
								<Mask
									variant="squircle"
									src="http://daisyui.com/tailwind-css-component-profile-3@56w.png"
								/>
								<div>
									<div className="font-bold">Brice Swyre</div>
									<div className="text-sm opacity-50">China</div>
								</div>
							</div>
							<div>
								Carrol Group
								<br />
								<Badge color="ghost" size="sm">
									Tax Accountant
								</Badge>
							</div>
							<div>Red</div>
							<Button color="ghost" size="xs">
								details
							</Button>
						</Table.Row>

						<Table.Row>
							<Checkbox />
							<div className="flex items-center space-x-3 truncate">
								<Mask
									variant="squircle"
									src="http://daisyui.com/tailwind-css-component-profile-4@56w.png"
								/>
								<div>
									<div className="font-bold">Marjy Ferencz</div>
									<div className="text-sm opacity-50">Russia</div>
								</div>
							</div>
							<div>
								Rowe-Schoen
								<br />
								<Badge color="ghost" size="sm">
									Office Assistant I
								</Badge>
							</div>
							<div>Crimson</div>
							<Button color="ghost" size="xs">
								details
							</Button>
						</Table.Row>

						<Table.Row>
							<Checkbox />
							<div className="flex items-center space-x-3 truncate">
								<Mask
									variant="squircle"
									src="http://daisyui.com/tailwind-css-component-profile-5@56w.png"
								/>
								<div>
									<div className="font-bold">Yancy Tear</div>
									<div className="text-sm opacity-50">Brazil</div>
								</div>
							</div>
							<div>
								Wyman-Ledner
								<br />
								<Badge color="ghost" size="sm">
									Community Outreach Specialist
								</Badge>
							</div>
							<div>Indigo</div>
							<Button color="ghost" size="xs">
								details
							</Button>
						</Table.Row>
					</Table.Body>

					<Table.Footer>
						<span>&nbsp;</span>
						<span>Name</span>
						<span>Job</span>
						<span>Favorite Color</span>
						<span>&nbsp;</span>
					</Table.Footer>
				</Table>
			</div>
		</div>
	);
}
