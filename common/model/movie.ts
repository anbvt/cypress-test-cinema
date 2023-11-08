interface movie {
	id: number,
	name: string,
	yearofmanufacture: number,
	poster: string,
	time: string,
	describe: string,
	trailer: string,
	status: string,
}

type MovieFilter = {
	movieType?: string,
	country?: number,
	branch?: string,
	status?: string,
	name: string
  }