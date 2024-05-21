// playground requires you to assign document definition to a variable called dd

var dd = {
	content: [
		{text: 'Column/row spans'},
		'Each cell-element can set a rowSpan or colSpan',
		{
		    //layout: 'noBorders',
			table: {
			    
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 1, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		}
	],
	styles: {
		header: {
			fontSize: 18,
			bold: true,
			margin: [0, 0, 0, 10],			noBorders: true
		},
		subheader: {
			fontSize: 16,
			bold: true,
			margin: [0, 10, 0, 5],			noBorders: true
		},
		tableExample: {
			margin: [0, 5, 0, 15],
			noBorders: true
		},
		tableHeader: {
			bold: true,
			fontSize: 13,
			color: 'black',			noBorders: true
		}
	},
	defaultStyle: {
		// alignment: 'justify'
	}
	
}
