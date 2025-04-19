'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Clock, Heart, Shield } from 'lucide-react';

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
					<h2 className="text-4xl font-bold mb-4">About Us</h2>
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
							<div className="absolute -left-4 -top-4 w-16 h-16 bg-blue-100 rounded-full opacity-50" />
							<div className="absolute -right-4 -bottom-4 w-16 h-16 bg-blue-100 rounded-full opacity-50" />
							<div className="relative flex items-center gap-3 mb-6">
								<div className="p-2 bg-blue-500 rounded-lg">
									<Heart className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Our Story</h3>
							</div>
						</div>
						
						<div className="space-y-6">
							<div className="relative">
								<div className="absolute -left-4 top-0 bottom-0 w-1 bg-blue-100 rounded-full" />
								<p className="text-muted-foreground pl-6">
									At <span className="font-bold text-blue-600">Linda Vista Vending</span>, we may be new to the San Gabriel Valley — but we&apos;ve already
									fallen in love with the community we now call home.
								</p>
							</div>
							
							<div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
								<div className="flex items-start gap-4">
									<div className="p-2 bg-blue-100 rounded-lg">
										<Award className="w-5 h-5 text-blue-600" />
									</div>
									<p className="text-muted-foreground">
										Founded by <span className="font-semibold text-blue-600">three generations</span> of a local family — husband and wife, grandparents, and
										even a curious toddler in tow — our business was born out of a simple desire: to make
										everyday moments better by offering great snacks, drinks, and coffee to the community
										we love.
									</p>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div className="bg-gray-50 p-4 rounded-lg">
									<div className="flex items-center gap-2 mb-2">
										<Heart className="w-4 h-4 text-blue-500" />
										<h4 className="font-semibold text-sm">Family Values</h4>
									</div>
									<p className="text-sm text-muted-foreground">
										We&apos;re a proud <span className="font-semibold text-foreground">immigrant family</span>, planting roots and giving back to our community.
									</p>
								</div>
								<div className="bg-gray-50 p-4 rounded-lg">
									<div className="flex items-center gap-2 mb-2">
										<Shield className="w-4 h-4 text-blue-500" />
										<h4 className="font-semibold text-sm">Direct Service</h4>
									</div>
									<p className="text-sm text-muted-foreground">
										No corporate red tape — you&apos;ll talk directly to the people who care for your machines.
									</p>
								</div>
							</div>

							<div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border border-blue-100">
								<div className="flex items-center gap-3 mb-3">
									<Clock className="w-5 h-5 text-blue-600" />
									<h4 className="font-semibold text-blue-600">Our Promise</h4>
								</div>
								<p className="text-muted-foreground">
									We believe vending should be more than just convenient. It should be <span className="font-semibold text-blue-600">reliable</span>,
									<span className="font-semibold text-blue-600"> thoughtful</span>, and a small act of <span className="font-semibold text-blue-600">hospitality</span> — every time someone walks up to one of our
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
						className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl"
					>
						<Image
							src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
							alt="Team meeting"
							fill
							className="object-cover"
							priority
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
						<div className="absolute bottom-0 left-0 right-0 p-8 text-white">
							<div className="flex items-center gap-3 mb-2">
								<div className="w-2 h-2 bg-blue-400 rounded-full" />
								<p className="text-sm font-medium">Our team at work</p>
							</div>
							<p className="text-lg font-semibold">Making your business a little more delicious</p>
							<p className="text-sm opacity-80 mt-2">Family-owned and operated with care</p>
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
										<Icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
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
