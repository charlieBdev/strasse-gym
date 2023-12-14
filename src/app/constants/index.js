const testimonials = [
	{
		name: 'Valentina',
		pic: '/test1.jpeg',
		testimonial:
			'Strasse Gym transformed my life—strength, confidence, and lasting friendships. A haven for martial arts enthusiasts, whether a beginner or pro!',
	},
	{
		name: 'Francis',
		pic: '/test2.jpeg',
		testimonial:
			'Strasse offers unparalleled fitness journeys. Skilled instructors, a positive vibe, and lifelong bonds. A life-changing experience for martial arts mastery and overall well-being!',
	},
	{
		name: 'Michelle',
		pic: '/test3.jpeg',
		testimonial:
			"The gym excels in martial arts excellence—expert instructors, well-equipped facilities, and a culture of respect and discipline. It's a transformative and empowering destination!",
	},
];

const timetable = [
	{
		day: 'MON-WED-FRI',
		sessions: [
			{
				icon: 'EveningSVG',
				time: '18:30 - 19:30',
				type: 'Kickboxing',
			},
			{
				icon: 'EveningSVG',
				time: '19:30 - 12:30',
				type: 'BJJ',
			},
		],
	},
	{
		day: 'TUE',
		sessions: [
			{
				icon: 'EveningSVG',
				time: '18:30 - 19:30',
				type: 'BJJ',
			},
		],
	},
	{
		day: 'THUR',
		sessions: [
			{
				icon: 'EveningSVG',
				time: '18:30 - 19:30',
				type: 'KAPAP',
			},
		],
	},
	{
		day: 'SAT',
		sessions: [
			{
				icon: 'DaytimeSVG',
				time: '09:00 - 10:00',
				type: 'Kids KB & BJJ',
			},
			{
				icon: 'DaytimeSVG',
				time: '13:00 - 14:00',
				type: 'KB Sparring',
			},
			{
				icon: 'DaytimeSVG',
				time: '14:00 - 15:00',
				type: 'BJJ Sparring',
			},
		],
	},
];

export { testimonials, timetable };
