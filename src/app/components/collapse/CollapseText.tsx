"use client";
import { useState } from "react";
import Card from "@mui/material/Card";
import Collapse from "@mui/material/Collapse";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import KeyboardArrowDownIcon from
	"@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from
	"@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";

const CollapseText = (props: {
	key: number;
	header: string;
	content: string;
}) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Card sx={{
				minWidth: 300,
				border: "1px solid rgba(211,211,211,0.6)"
			}}>
				<div className="text-gray-900">
					<CardHeader
						title={props.header}
						action={
							<IconButton
								onClick={() => setOpen(!open)}
								aria-label="expand"
								size="small"
							>
								{open ? <KeyboardArrowUpIcon />
									: <KeyboardArrowDownIcon />}
							</IconButton>
						}
					></CardHeader>
				</div>
				<div style={{
					backgroundColor: "rgba(211,211,211,0.2)"
				}}>
					<Collapse in={open} timeout="auto"
						unmountOnExit>
						<CardContent>
							<Container sx={{
								lineHeight: 2,
							}}>
								{props.content}
							</Container>
						</CardContent>
					</Collapse>
				</div>
			</Card>
		</>
	);
};

export default CollapseText;