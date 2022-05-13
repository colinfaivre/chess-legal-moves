export function parseBoard(boardString: string): string[] {
	var boardCells: string[] = [];
	var rankList = getRanks(boardString);

	for (let i = rankList.length - 1; i >= 0; i--) {
		boardCells.push(...getRankCells(rankList[i]));
	}

	return boardCells
}

export function getRanks(boardString: string): string[] {
	return boardString.split("/");
}

export function getRankCells(rank: string): string[] {
	rank = convertNumbersToPoints(rank);
	return rank.split("");
}

export function convertNumbersToPoints(rank: string): string {
	for (let i = 1; i <= 8; i++) {
		rank = rank.replaceAll(i.toString(), ".".repeat(i));
	}

	return rank;
}