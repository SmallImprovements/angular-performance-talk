(function (sandbox) {
	'use strict';

	sandbox.angular.module('example', [])
		.run(function ($rootScope) {
			$rootScope.contacts = makeDummyContacts(100);
		});

	function makeDummyContacts(n) {
		var contacts = [];
		for (; n; n--) { contacts.push(makeDummyContact()); }
		return contacts;
	}

	function makeDummyContact() {
		return {
			name: 'asd',
			mail: 'asd@asd.de',
			phone: '123123',
			website: 'asdasd'
		};
	}

}(this));