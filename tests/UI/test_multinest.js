import { Selector } from 'testcafe';

fixture `nesting`.page `./multi_nest.html`;

test('Is correct nested order restored?', async t => {
	const groups = Selector('.timeline-label');
	const nesting = groups.withText('1');
	const nested  = groups.withText('3');
	await t
		.expect(groups.count).eql(3)
		.click(nesting);

	await t
	.expect(groups.count).eql(2);
	
	await t.expect(nested.exists).notOk()
	
	await t.click(nesting);
	
	await t
	.expect(nesting.nextSibling(0))
	.contains('3');
})