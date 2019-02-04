import { Selector } from 'testcafe';

fixture `nesting`.page `./nesting.html`;

test('Do nested groups hide/unhide', async t => {
	const groups = Selector('.timeline-label');
	const nesting = groups.withText('1');
	const nested  = groups.withText('2');
	await t
		.expect(groups.count).eql(2)
		.click(nesting);

	await t.expect(groups.count).eql(1);
})