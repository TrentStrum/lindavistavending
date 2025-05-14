'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Clock, Heart, Shield, MapPin } from 'lucide-react';

const values = [
	{
		icon: Shield,
		title: 'Reliability',
		description: '24/7 service and maintenance support for peace of mind',
	},
	{
		icon: Heart,
		title: 'Quality',
		description: 'Premium products and state-of-the-art equipment',
	},
	{
		icon: Clock,
		title: 'Efficiency',
		description: 'Quick response times and proactive maintenance',
	},
	{
		icon: Award,
		title: 'Excellence',
		description: 'Committed to exceeding customer expectations',
	},
];

export const AboutSection = () => {
	return (
		<section id="about" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.3 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">About Us</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						A family-owned business committed to excellence in vending services
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
						className="space-y-8"
					>
						<div className="relative">
							<div className="absolute -left-4 -top-4 w-16 h-16 bg-primary/10 rounded-full opacity-50" />
							<div className="absolute -right-4 -bottom-4 w-16 h-16 bg-primary/10 rounded-full opacity-50" />
							<div className="relative flex items-center gap-3 mb-6">
								<div className="p-2 bg-primary rounded-lg">
									<Heart className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Our Story</h3>
							</div>
						</div>
						
						<div className="space-y-6">
							<div className="relative">
								<div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary/10 rounded-full" />
								<p className="text-muted-foreground pl-6">
									At <span className="font-bold text-primary">Linda Vista Vending</span>, we may be new to the San Gabriel Valley — but we&apos;ve already
									fell in love with the community we now call home.
								</p>
							</div>
							
							<div className="bg-gradient-to-br from-secondary/10 to-white p-6 rounded-xl border border-secondary/30 shadow-sm hover:shadow-md transition-shadow">
								<div className="flex items-start gap-4">
									<div className="p-2 bg-secondary/30 rounded-lg">
										<Award className="w-5 h-5 text-primary" />
									</div>
									<p className="text-muted-foreground">
										Founded by <span className="font-semibold text-primary">three generations</span> of a local family — husband and wife, grandparents, and
										even a curious toddler in tow — our business was born out of a simple desire: to make
										everyday moments better by offering great snacks, drinks, and coffee to the community
										we love.
									</p>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div className="bg-gray-50 p-4 rounded-lg">
									<div className="flex items-center gap-2 mb-2">
										<Heart className="w-4 h-4 text-primary" />
										<h4 className="font-semibold text-sm">Family Values</h4>
									</div>
									<p className="text-sm text-muted-foreground">
										We&apos;re a proud <span className="font-semibold text-foreground">immigrant family</span>, planting roots and giving back to our community.
									</p>
								</div>
								<div className="bg-gray-50 p-4 rounded-lg">
									<div className="flex items-center gap-2 mb-2">
										<Shield className="w-4 h-4 text-primary" />
										<h4 className="font-semibold text-sm">Direct Service</h4>
									</div>
									<p className="text-sm text-muted-foreground">
										No corporate red tape — you&apos;ll talk directly to the people who care for your machines.
									</p>
								</div>
							</div>

							<div className="bg-gradient-to-r from-secondary/10 to-white p-6 rounded-xl border border-secondary/30">
								<div className="flex items-center gap-3 mb-3">
									<Clock className="w-5 h-5 text-primary" />
									<h4 className="font-semibold text-primary">Our Promise</h4>
								</div>
								<p className="text-muted-foreground">
									We believe vending should be more than just convenient. It should be <span className="font-semibold text-primary">reliable</span>,
									<span className="font-semibold text-primary"> thoughtful</span>, and a small act of <span className="font-semibold text-primary">hospitality</span> — every time someone walks up to one of our
									machines.
								</p>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
						className="relative h-full rounded-2xl overflow-hidden shadow-xl"
					>
						<Image
							src="/images/family.jpg"
							alt="Team meeting"
							fill
							className="object-cover"
							priority
						/>
						<div className="absolute inset-0 bg-black/20 z-5 pointer-events-none" />
						<div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/90 via-black/60 to-transparent z-10" />
						<div className="absolute top-0 left-0 right-0 flex flex-col items-start p-8 z-20">
							<div className="backdrop-blur-md bg-black/40 rounded-xl px-6 py-4 shadow-lg">
								<h3 className="text-2xl font-bold mb-1 text-white drop-shadow-md">Making your business a little more delicious</h3>
								<div className="w-10 h-1 bg-accent rounded-full mb-2" />
								<p className="text-base opacity-90 text-white drop-shadow">Family-owned and operated with care</p>
							</div>
						</div>
						<div className="absolute bottom-0 left-0 right-0 p-8 z-20">
							<div className="inline-flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full">
								<MapPin className="w-4 h-4 text-accent" />
								<p className="text-sm font-medium text-white">San Gabriel Mission Playhouse</p>
							</div>
						</div>
					</motion.div>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{values.map((value, index) => {
						const Icon = value.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card className="text-center h-full">
									<CardContent className="pt-6">
										<Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
										<h3 className="text-lg font-semibold mb-2">{value.title}</h3>
										<p className="text-sm text-muted-foreground">{value.description}</p>
									</CardContent>
								</Card>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
