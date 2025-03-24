"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, LinkedinIcon, GithubIcon } from 'lucide-react'
import Link from 'next/link'

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-slate-50 dark:bg-slate-900/30">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Contact Me
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
              <CardDescription>
                Fill out the form below to send me a message. I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Subject of your message" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    className="min-h-28"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-between space-y-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  You can reach me through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        <Link
                          href="mailto:tusharsinharvvc@gmail.com"
                          className="hover:text-primary transition-colors"
                        >
                          tusharsinharvvc@gmail.com
                        </Link>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <Link
                          href="mailto:ts0800@srmist.edu.in"
                          className="hover:text-primary transition-colors"
                        >
                          ts0800@srmist.edu.in
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <p className="text-sm text-muted-foreground">
                        <Link
                          href="https://www.linkedin.com/in/tushar-sinha-%2059a389264/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          Tushar Sinha
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <GithubIcon className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <p className="text-sm text-muted-foreground">
                        <Link
                          href="https://github.com/tusharsinha007"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          tusharsinha007
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-lg shadow-md text-white">
              <h3 className="text-xl font-bold mb-2">Looking for Opportunities</h3>
              <p className="text-blue-100 mb-4">
                I am currently open to internships and opportunities in Java development
                and cybersecurity. Feel free to reach out!
              </p>
              <Button
                variant="secondary"
                className="bg-white text-blue-800 hover:bg-blue-50"
                asChild
              >
                <a href="mailto:tusharsinharvvc@gmail.com">Email Me</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
